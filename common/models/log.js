"use strict";

module.exports = function(Log) {
  Log.clearall = function(cb) {
    Log.destroyAll();
    cb();
  };

  Log.remoteMethod("clearall", {
    http: { path: "/clearAll", verb: "get" }
  });

  Log.beforeRemote('create', function(ctx, modelInstance, next) {

    if(ctx && ctx.args && ctx.args.data){
      ctx.args.data.postedAt = Date.now();
    }

    next();
  });
};