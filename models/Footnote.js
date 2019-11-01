const { Model } = require("objection");

class Footnote extends Model {
  static get tableName() {
    return "footnotes";
  }

  static get relationMappings() {
    const Paper = require("./Paper");
    return {
      paper: {
        relation: Model.BelongsToOneRelation,
        modelClass: Paper,
        join: {
          from: "footnotes.paper_id",
          to: "papers.id"
        }
      }
    };
  }
}

module.exports = Footnote;
