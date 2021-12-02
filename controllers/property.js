/**
 * Property Controller
 */

// * model
const Property = require('../models/Property');

/**
 * Retrieve and return all the properties listed in the propertyData collection in Mongo.
 * @returns The payload that is returned, only includes the propertyId and propertyName.
 */
exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find().select(
            'propertyId propertyName -_id',
        );

        res.status(201).json({
            properties: properties,
            success: true,
        });
    } catch (error) {
        res.status(400).json({success: false, message: error});
    }
};

/**
 * Retrieve and return the rentalIncome data for the corresponding property.
 * @param {propertyId} propertyId
 * @returns
 */
exports.getProperty = async (req, res) => {
    try {
        const property = await Property.find({
            propertyId: req.params.id,
        }).select('propertyId propertyName -_id income expense');

        res.status(201).json({
            property: property,
            success: true,
        });
    } catch (error) {
        res.status(400).json({success: false, message: error});
    }
};
