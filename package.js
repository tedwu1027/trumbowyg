Package.describe({
    name: 'kaneoh:trumbowyg',
    version: '0.0.1',
    summary: 'Wrapper for material design icons',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {

    // This is meteor version.
    api.versionsFrom('1.1.0.2');

    api.addFiles([
        'dist/trumbowyg.js',
        'dist/svgImport.js',
        'dist/ui/trumbowyg.css',
        'dist/plugins/upload/trumbowyg.upload.js',
        'dist/plugins/colors/trumbowyg.colors.js',
        'dist/plugins/colors/ui/trumbowyg.colors.css',
    ], 'client');

    // api.addAssets([
    //     'dist/ui/icons-trumbow.svg',
    // ], 'client');

    // api.addAssets('fonts/materialdesignicons-webfont.eot', 'client');
    // api.addAssets('fonts/materialdesignicons-webfont.svg', 'client');
    // api.addAssets('fonts/materialdesignicons-webfont.ttf', 'client');
    // api.addAssets('fonts/materialdesignicons-webfont.woff', 'client');
    // api.addAssets('fonts/materialdesignicons-webfont.woff2', 'client');


    // api.export('MaterializeIcons')
});

//TODO: implement a test case

/*Package.onTest(function(api) {
  api.use('tinytest');
  api.use('momday:materialize');
  api.addFiles('materialize-tests.js');
});*/
