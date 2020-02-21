//const cds = require('@sap/cds')

/** Service implementation for CatalogService */
module.exports = cds.service.impl(srv=> {

    srv.before(['CREATE','UPDATE'], 'Authors', req=> {
        const data = req.data;
        //manipulate data
        console.log('POSTED Data: ' + data );
        return data;


  })
})