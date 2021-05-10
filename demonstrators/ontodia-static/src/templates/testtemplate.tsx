/* template.tsx */
import * as React from 'react';
import { ElementIri, ElementModel, Dictionary, LocalizedString, Property } from '../../node_modules/ontodia/src/ontodia/data/model';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

// @ts-ignore
import * as Wkt from 'wicket'

interface Wkt {
    new(): Wkt;
    delimiter: string;
    wrapVertices: string;
    regExes: string;
    components: string;
    isCollection(): boolean;
    sameCoords(a: any, b: any): boolean;
    fromObject(obj: any): Wkt;
    toObject(config?: any): any;
    toString(config?: any): string;
    fromJson(obj: any): Wkt;
    toJson(): any;
    merge(wkt: string): Wkt;
    read(str: string): Wkt;
    write(components?: Array<any>): string;
    isRectangle: boolean;
}

export type PropArray = Array<{
    id: string;
    name: string;
    property: Property;
}>;

export interface TemplateProps {
    elementId: string;
    data: ElementModel;
    iri: ElementIri;
    types: string;
    label: string;
    color: any;
    iconUrl: string;
    imgUrl?: string;
    isExpanded?: boolean;
    propsAsList?: PropArray;
    props?: Dictionary<Property>;
}

export class TestTemplate extends React.Component<TemplateProps, {}> {


    componentDidMount() {
        // create map
        var wicket = new Wkt.Wkt();
        var wkt_geom 
        this.props.propsAsList.some(({name, id, property}) => { 
            if( id == 'http://www.opengis.net/ont/geosparql#asWKT' )
                wkt_geom = property.values[0].value
                return true
            }
        )
        wicket.read(wkt_geom)
        let location = wicket.toJson();
        let map = L.map('map-'+this.props.elementId, {
          center: [location.coordinates[1],location.coordinates[0]],
          zoom: 16,
          layers: [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OSM'
            }),
          ]
        });
        map.dragging.disable();
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
        if (map.tap) map.tap.disable();
        let marker = L.marker([location.coordinates[1],location.coordinates[0]]).addTo(map);
      }

    render() {
        
        return (
            <div className='ontodia-standard-template'
                style={{borderColor: this.props.color}}>
                <div className={this.props.iconUrl} />
                <div className='example-label'>{this.props.label} 
                {this.props.propsAsList.map(({name, id, property}) => { 
                        if( id == 'http://www.opengis.net/ont/geosparql#asWKT' )
                            return(property.values[0].value)
                    }
                )}
                <div id={'map-'+this.props.elementId} className='geo_point'/>
                </div>
            </div>
        );
    }

    

}