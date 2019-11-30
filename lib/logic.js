import { create } from "domain";

/**
 * Creates an analyst
 * @param {nuclearhyperledger.createAnalyst} createAnalyst
 * @transaction
 */

 function createAnalyst(createAnalyst) {

    var factory = getFactory();
    var ns = 'nuclearhyperledger';

    var analyst = factory.newResource(ns, 'Analyst', createAnalyst.param_analyst_ID);
    analyst.passport = createAnalyst.param_passport;
    analyst.name = createAnalyst.param_name;
    analyst.nationality = createAnalyst.param_nationality;
    analyst.role = createAnalyst.param_role;

    return getAnalystRegistry(ns + '.Analyst')
    .then(function(analystRegistry) {
        return analystRegistry.addAll([analyst]);
    })

 }

 /**
 * Creates an analyzed_tube
 * @param {nuclearhyperledger.createAnalyzed_Tube} createAnalyzed_Tube
 * @transaction
 */

function createAnalyzed_Tube(createAnalyzed_Tube) {

    var factory = getFactory();
    var ns = 'nuclearhyperledger';

    var analyzed_tube = factory.newResource(ns, '.Analyzed_Tube', createAnalyzed_Tube.param_analyzed_tube_ID);
    analyzed_tube.method = createAnalyzed_Tube.param_method;
    analyzed_tube.state = createAnalyzed_Tube.param_state;
    analyzed_tube.analyst = createAnalyzed_Tube.param_analyst;
    analyzed_tube.aquired_tube = createAnalyzed_Tube.param_aquired_tube;

    return getAnalyzed_TubeRegistry(ns + '.Analyzed_Tube')
    .then(function(analyzed_tubeRegistry) {
        return analyzed_tubeRegistry.addAll([analyzed_tube]);
    })

 }

 /**
 * Creates an acquired_tube
 * @param {nuclearhyperledger.createAcquired_Tube} createAcquired_Tube
 * @transaction
 */

function createAcquired_Tube(createAcquired_Tube) {

var factory = getFactory();
var ns = 'nuclearhyperledger';

var acquired_tube = factory.newResource(ns, '.Acquired_Tube', createAcquired_Tube.param_acquired_tube_ID);
acquired_tube.acqDate = createAcquired_Tube.param_acqDate;
acquired_tube.rawFile = createAcquired_Tube.param_rawFile;
acquired_tube.tube = createAcquired_Tube.param_tube;
acquired_tube.calibration = createAcquired_Tube.param_calibration;

return getAcquired_TubeRegistry(ns + '.Acquired_Tube')
.then(function(acquired_tubeRegistry) {
    return acquired_tubeRegistry.addAll([acquired_tube]);
})


}

 /**
 * Creates an indication
 * @param {nuclearhyperledger.createIndication} createIndication 
 * @transaction
 */

function createIndication(createIndication) {

    var factory = getFactory();
    var ns = 'nuclearhyperledger';

    var indication = factory.newResource(ns, '.Indication', createIndication.param_indication_ID);
    indication.indDate = createIndication.param_indication_ID;
    indication.position = createIndication.param_position;
    indication.type = createIndication.param_type;
    indication.tube = createIndication.param_tube;

    return getIndicationRegistry(ns + '.Indication') 
    .then(function(indicationRegistry) {
        return indicationRegistry.addAll([indication]);
    })

}

 /**
 * Creates an tube
 * @param {nuclearhyperledger.createTube} createTube 
 * @transaction
 */

function createTube(createTube) {

    var factory = getFactory();
    var ns = 'nuclearhyperledger';

    var tube = factory.newResource(ns, '.Tube', createTube.param_tube_ID);
    tube.indDate = createTube.param_indDate;
    tube.position = createTube.param_position;
    tube.type = createTube.param_type;
    tube.analyzed_tube = createTube.param_analyzed_tube;

    return getTubeRegistry(ns + '.Tube')
    .then(function(tubeRegistry) {
        return tubeRegistry.addAll([tube]);
    })

}

 /**
 * Creates an calibration
 * @param {nuclearhyperledger.createCalibration} createCalibration 
 * @transaction
 */

function createCalibration(createCalibration) {

    var factory = getFactory();
    var ns = 'nucleaerhyperledger';

    var calibration = factory.newResource(ns, '.Calibration', createCalibration.param_calibration_ID);
    calibration.calDate = createCalibration.param_calDate;
    calibration.equipment = createCalibration.param_equipment;
    calibration.work = createCalibration.param_work;

    return getCalibrationRegistry(ns + '.Calibration')
    .then(function(calibrationRegistry) {
        return calibrationRegistry.addAll([calibration]);
    })

}

 /**
 * Creates an work
 * @param {nuclearhyperledger.createWork} createWork 
 * @transaction
 */

function createWork(createWork) {

    var factory = getFactory();
    var ns = 'nuclearhyperledger';

    var work = factory.newResource(ns, '.Work', createWork.param_work_ID);
    work.workDate = createWork.param_workDate;
    work.description = createWork.param_description;

    return getWorkRegistry(ns + '.Work')
    .then(function(workRegistry) {
        return workRegistry.addAll([work]);
    })

}