## Arrived Partners Website Wordpress Theme
This project contains the wordpress theme used by the ArrivedPartners.com website. In addition to this wordpress theme, there may also be other projects (Arrived Partners Wordpress Plugin, etc.) that make up the full codebase for the ArrivedPartners.com website. This readme will contain the overall info for the ArrivedPartners.com website project.

## ArrivedPartners.com Developer Info

### Hosting
As of 11/6/2020, the ArrivedPartners.com website is hosted on an AWS Lightsail Wordpress instance under the AWS account 'Arrived' (root user: admin@arrivedpartners.com).

#### Static Files
Static files are served by the lightsail instance from the `/home/bitnami/apps/wordpress/htdocs/static` directory.

### Based on _S Wordpress Theme Template
This project is built on top of the [_S (underscores)](https://underscores.me/) wordpress theme template.

### Development Workflow
The styling of this site is defined in the `arrived-partners-wordpress-theme`.

When you would like to modify content of the site, first check to see if it is editable in the wordpress editor. The pages of this site are set up as wordpress pages, however some of the more advanced components of the site had to be written in PHP. If you must edit the code of the site:
1. Clone this repository
2. Make changes, then push
3. SSH into the Lightsail Instance (this can be done with any ssh client, but aws offers a browser-based one that works great)
4. navigate to the `/home/bitnami/apps/wordpress/htdocs/wp-content/themes/arrived-partners-wordpress-theme` directory
5. enter command:
```
$ git pull
```

Then, the changes should show up on the site.

**NOTE:** don't forget to compile the SASS files if you made any changes to those!

#### Note about SCSS
This project uses scss for styling.

As of 11/6/2020, all styling which is specific to the arrived partners theme is defined inside of the `src/sass/site/_arrived-partners.scss` file. I realize this could be better organized, but this website was created in a bit of a rush 😅.

**NOTE:** In order for changes in the sass files to show up in the actual styles, you must run
```
$ npm run build
```
which will compile the sass into the `styles.css` file.

#### Note about Webpack
If anything in `src/` is modified, it will need to be compiled by webpack, using
```
$ npm run build
```
before it will show up in the code that gets run.