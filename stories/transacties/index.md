---
endpoint: https://data.labs.pdok.nl/sparql
output: geo
layout: story
published: false
title: Hipheidsindex
---

<h1>Woningtransacties en de onofficiële hipheidsindex</h1>

<p>[disclaimer: deze datastory maakt gebruik van transactiegegevens
vanuit het Kadaster (april 2017).  Deze is geaggregeerd en tijdelijk
beschikbaar gesteld zonder enige vorm van garantie op de kwaliteit van
de data]</p>

<p>Er valt veel af te lezen aan de hoeveelheid transacties in een
bepaald gebied.  In gebieden met veel vraag naar woningen, worden veel
panden met woningfunctie verhandeld.  Ter illustratie hier twee
voorbeelden: het aantal transacties per buurt voor de gemeente
Amsterdam en de gemeente Delfzijl in 2016.  Delfzijl is één van de
gemeentes in een krimpgebied.</p>

<p>De data is samengesteld uit een combinatie van
woningtransactiegegevens van het Kadaster en de buurtenindeling van
het CBS.  De thematische kaart geeft een gradueel beeld met uitersten
van diep rood (0 transacties) tot felgroen (100 transacties)</p>

<h1>Gemeente Amsterdam</h1>

<query data-endpoint="https://data.labs.pdok.nl/sparql"
       data-query-ref="amsterdam-hipheid.rq">
</query>

<h1>Gemeente Delfzijl</h1>

<p>Hieronder is het aantal woningtransacties afgezet tegen dezelfde
maat als die voor Amsterdam is toegepast (een bereik tussen 0 en 100
transacties per buurt).  Wat duidelijk hieruit blijkt, is dat er
weinig woningverkopen zijn geweest in vergelijking met een grote
stad.</p>

<query data-endpoint="https://data.labs.pdok.nl/sparql"
       data-query-ref="delfzijl-hipheid.rq">
</query>

<h1>Andere gemeentecode?</h1>

<p>Je kan deze vraag natuurlijk ook stellen voor een andere gemeente.
Je kan de bijbehorende gemeentecode opzoeken in de onderstaande
query:</p>

<query data-endpoint="https://data.labs.pdok.nl/sparql"
       data-output="table"
       data-query-ref="gemeente-lookup.rq">
</query>
