const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");

/*
@route GET /requests/getRequests
@desc for fetching all the requests for a particular user
@access private
*/
exports.getRequests = asyncHandler( async( req, res, next ) => {
    const  user_id  = req.user.id;
    
    const requests = await Request.find({ user_id: user_id }, function(err) {
        if(err) {
            res.status(404).send("User not found!!");
        }
    })

    if(user) {
        res.status(200).json({
            success: {
                data: requests,
                message: "Requests fetched successfully"
            }
        })
    }
})

/*
@route POST /requests/postRequest
@desc for adding a new request
@access private
*/
exports.addRequest = asyncHandler( async( req, res, next) => {
    const { user_id, sitter_id, start, end, status } = req.body;

    const user = await Profile.findOne({_id: user_id}, function(err) {
        if(err) {
            res.status(404).send("User not found!!")
        }
    });
    const sitter = await Profile.findOne({_id: sitter_id }, function(err) {
        if(err) {
            res.status(404).send("Sitter not found");
        }
    });

    if(user && sitter) {
        const request = await Request.create({
            user_id,
            sitter_id,
            start,
            end,
            status
        })

        if(request) {
            res.status(201).json({
                success: {
                  request: {
                    request_id: request._id,
                    username: user.firstName,
                    email: user.email
                  },
                  message: "Request added successfully",
                }
            });
        }
        else {
            res.status(500);
            throw new Error("Internal Server Error");
        }
    }
})

/*
@route PUT /requests/postRequest/:request_id
@desc for updating an existing request
@access private
*/
exports.updateRequest = asyncHandler( async( req, res ) => {
    const { status } = req.body;
    const request_id = req.params.request_id;

    const request = Request.findOne({_id: request_id}, function(err) {
        if(err) {
            res.status(404).send("Request not found!!");
        }
    })

    if(request) {
        await Request.updateOne({ _id: request_id }, { status: status }, function(err) {
            if(err) {
                res.status(500).send("Internal Server Error!");
            }

            res.status(200).send("Request updated successfully");
        })
    }
})