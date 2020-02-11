var { UnauthorizedError } = require('@app/helpers');


module.exports = async (resolve, parent, args, ctx, info) => {

  let definition = info.parentType.getFields()[info.path.key];

  let access = definition.access;

  // Execute resolver if the operation needs no authorization
  if (access === "open") return resolve();

  // Execute resolver if user has sufficient permissions
  if (ctx.authorization instanceof Object &&
    (!access ||
      (access instanceof Array && access.indexOf(ctx.authorization.userRole) >= 0)
    )
  ) return resolve();

  throw new UnauthorizedError('Authorization failed');

}
