'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  async find(ctx) {
    let entities;
    console.log(ctx)
    if (ctx.state.user) {
      entities = await strapi.services.article.find(ctx.query);
    } else {
      entities = await strapi.services.article
        .find({ ...ctx.query, restricted: false });
    }

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.article })
    );
  },
};
