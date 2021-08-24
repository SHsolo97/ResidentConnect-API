
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const ContactInfo = require('../models/contact-info');

exports.gethealthStatus= async function(req, res,next) {
  const returnval="contactsinfo service running at port 4001... v0.0.6";
    res.status(200).send( returnval);
}

exports.getContactsbyCommunityId = async function(req, res,next) {
    const communityid=req.body.communityid;
    let contactinfos;
    try{
        contactinfos=await ContactInfo.findById(communityid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find contact details of community- ${communityid}`,
          500
        );
        return next(error);
      }

      
  if (!contactinfos) {
    const error = new HttpError(
      'Could not find contact details of  community for the provided id.',
      404
    );
    return next(error);
  }  
  res.json(contactinfos.toObject({ getters: true }) );

}
exports.createContact = async function(req, res,next) {
  const communityid=req.body.communityid;
  const errors = validationResult(req);
    let contactinfos;
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }
      try{
        contactinfos=await ContactInfo.findById(communityid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find contact details of community- ${communityid}`,
          500
        );
        return next(error);
      }

      
  if (!contactinfos) 
  {
    try{ contactinfos=new ContactInfo();
     contactinfos.contacts.push(req.body);
     contactinfos._id=communityid;
     contactinfos.save();
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find contact details of community- ${communityid}`,
          500
        );
        return next(error);
      }
    res.status(201).json( contactinfos );
  }
  else
  {
    try{
          contactinfos.contacts.push(req.body);
    contactinfos.save();
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find contact details of community- ${communityid}`,
          500
        );
        return next(error);
      }
    res.status(201).json( contactinfos );
  }
     
}

exports.editContact = async function(req, res,next) {
    const communityid=req.params.id;
    const contactid=req.params.cid;

}

exports.deleteContact = async function(req, res,next) {
  const communityid=req.body.communityid;
  const contactid=req.params.cid;
    let contactinfos;
    try{
        contactinfos=await ContactInfo.findById (communityid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find contact details of community- ${communityid}`,
          500
        );
        return next(error);
      }

      
  if (!contactinfos) {
    const error = new HttpError(
      'Could not find contact details of  community for the provided id.',
      404
    );
    return next(error);
  }  
  try{
    const sess = await mongoose.startSession();
    sess.startTransaction();
    contactinfos.contacts.pull(contactid);
    await contactinfos.save({ session: sess });
    await sess.commitTransaction();
    }
    catch (err) {
    const error = new HttpError(
    `Something went wrong, could not find contact details of community- ${communityid}`,
    500
  );
  return next(error);
}
res.status(201).json( contactinfos );

}

