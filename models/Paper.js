const { Model } = require("objection");

class Paper extends Model {
  static get tableName() {
    return "papers";
  }

  static get relationMappings() {
    const Footnote = require("./Footnote");
    return {
      footnotes: {
        relation: Model.HasManyRelation,
        modelClass: Footnote,
        join: {
          from: "papers.id",
          to: "footnotes.paper_id"
        }
      }
    };
  }
}

module.exports = Paper;
