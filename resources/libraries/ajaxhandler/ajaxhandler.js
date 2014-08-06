define(function (require) {
    "use strict";

    return {
        sendAjax: function (options) {
            var successCallback = options.success || function (response) {
                console.log("WARNING : No success callback defined. data : ", response)
            };
            var errorCallback = options.error || function (response) {
                console.log("WARNING : No error callback defined. data : ", response)
            };

            $.ajax(options);

            function successCall(response, textStatus, jqXHR) {
                if (response.meta && !response.meta.success) {
                    errorCallback.call(options.context, response);
                } else {
                    var responseData = response;
                    if (!response.meta) {
                        //If 3rd party call, response might not come in a format required
                        responseData = {
                            data: response,
                            meta: {
                                success: true
                            }
                        };
                    }
                    successCallback.call(options.context, responseData);
                }
            }

            function errorCall(jqXHR, textStatus, errorThrown) {
                var responseData = {
                    meta: {
                        success: false,
                        statusCode: jqXHR.status,
                        statusMessage: errorThrown
                    },
                    data: {}
                };

                var responseText = $.parseJSON(jqXHR.responseText);

                if (responseText.meta) {
                    var metaData = responseText.meta.metaData;
                    if (metaData !== undefined) {
                        // for 403, forbidden
                        handleForbidden(metaData);
                    }
                }

                errorCallback.call(options.context, responseData);
            }


            function handleForbidden(metaData) {
                if (metaData.session === "expired") {
                    if (metaData.redirectURL !== undefined) {
                        window.location.href = metaData.redirectURL;
                    } else {
                        console.log("redirectURL was not given.");
                        window.location.href = window.document.domain;
                    }
                }
            }


        }
    };
});