# Local installation

  1. Clone this Git repositoy:

     a. On Linux:

        ```
        git clone https://github.com/PDOK/data.labs.pdok.nl
        ```

     b. On Windows: use Git Bash.

  2. Install Ruby:

     a. On Fedora:

        ```
        sudo dnf install ruby ruby-devel rubygem-json
        ```

     b. On Ubuntu:

        ```
        sudo apt-get install zlib1g-dev libffi-dev ruby-full ruby-dev
        ```

     c. On Windows: download and install the default option from
        <https://rubyinstaller.org/downloads>.

  3. Install the bundler:

     ```
     gem install bundler
     ```

  4. Use the bundler to install the website:

     ```
     run bundler install
     ```

  5. Start serving the web site with Jekyll:
  
     ```
     ./serve.sh
     ```

     If you encounter trouble running the above command you can try
     the following alternative:

     ```
     bundler exec jekyll serve
     ```

  6. The site now run on <http://localhost:5000>.
  
     You can edit `_config.yml` in order to configure an different
     port.

# Troubleshooting

## SSL certificate not found error

Add a new system environment variable named `SSL_CERT_FILE` and set
its value to the full file path to the `cacert.pem` file, e.g.:

```
export SSL_CERT_FILE=$PWD/cert/cacert.pem
```
