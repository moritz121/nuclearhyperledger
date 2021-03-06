 /**
 * Initializes bussiness network
 * @param {nuclearhyperledger.init} init 
 * @transaction
 */

 function init(init) {

    var factory = getFactory();
    var ns = 'nuclearhyperledger';
    var tubearray = [];
    var analystarray = [];


    for(var i=0; i<200; i++) {

        var tube = factory.newResource(ns, 'Tube', `Tube${i+1}`);
        tube.posX = Math.floor((Math.random() * 50) + 0);;
        tube.posY = Math.floor((Math.random() * 50) + 0);;
        tube.length = Math.floor((Math.random() * 50) + 1);;
        tubearray.push(tube);

    }

    var work = factory.newResource(ns, 'Work', 'Work1');
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    work.workDate = date;
    work.description = 'Description of Work1';

    for(var i=0; i<25; i++) {

        var x = i+1;
        var analyst = factory.newResource(ns, 'Analyst', `Analyst${x}`);
        analyst.passport = `Passport${x}`;
        analyst.name = `${x}`;
        analyst.nationality = 'Spanish';
        analyst.role = 'One';
        analystarray.push(analyst);

    }    

    for(var i=25; i<50; i++) {

        var x = i+1;
        var analyst = factory.newResource(ns, 'Analyst', `Analyst${x}`);
        analyst.passport = `Passport${x}`;
        analyst.name = `${x}`;
        analyst.nationality = 'Spanish';
        analyst.role = 'Two';
        analystarray.push(analyst);

    }  

    return getAssetRegistry(ns + '.Work')
    .then(function(workRegistry) {
        return workRegistry.addAll([work]);
    }).then (function() {
        return getAssetRegistry(ns + '.Tube')
        .then(function(tubeRegistry) {
            return tubeRegistry.addAll(tubearray);
        }).then(function() {
            return getParticipantRegistry(ns + '.Analyst')
            .then(function(analystRegistry) {
                return analystRegistry.addAll(analystarray);
            })
        })
    })

 }
