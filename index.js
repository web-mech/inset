module.exports = function inset(tpl, ctx) {
  return tpl.replace(/(?=\{)\{[a-z|A-Z|0-9|.]{0,}\}/g, function(match) {
    return match.replace(/[\{|\}]/g, '').split('.').reduce(function(ctx, property) {
      if (ctx.hasOwnProperty(property)) {
        return ctx[property];
      }
      return;
    }, ctx) || '';
  });
};