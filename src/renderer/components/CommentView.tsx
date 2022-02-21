import React from 'react';

export type Comment = {
  commentid: string;
  contents: string;
  point: number;
  username: string;
  date: string;
};

export type CommentViewProps = {
  comment: Comment;
};

const CommentView: React.FC<CommentViewProps> = ({ comment }) => {
  return (
    <div className="p-1">
      <div className="flex" key={comment.commentid}>
        <span className="text-gray-500 mr-1">{comment.username}</span>
        <span className="text-orange-500">{'★'.repeat(comment.point)}</span>
        <span className="text-gray-300">{'★'.repeat(5 - comment.point)}</span>
        <b className="mx-1">{comment.point}</b>
        <span className="text-sm ml-auto font-mono text-gray-400">
          {comment.date.substring(0, 10)}
        </span>
      </div>
      <p dangerouslySetInnerHTML={{ __html: comment.contents }} />
    </div>
  );
};

export default CommentView;