// class를 이용한 모델 작성
const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Comment extends (
  Model
) {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: 'Comment',
        tableName: 'comments',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }
};

// function을 이용한 모델 작성
/* module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 한글 저장
    }
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
}; */
