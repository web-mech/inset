module.exports = function inset(tpl, ctx) {
  return tpl.replace(/(?=\{)\{[\w|.]{0,}\}/g, function(match) {
    return match.replace(/[\{|\}]/g, '').split('.').reduce(function(ctx, property) {
      if (ctx && ctx.hasOwnProperty(property)) {
        return ctx[property];
      }
      return;
    }, ctx) || '';
  });
};