import React, { useState } from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

interface Post {
  id: string;
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  tags: string[];
}

interface DiscussionForumProps {
  posts: Post[];
  onLikePost?: (postId: string) => void;
  onAddComment?: (postId: string, comment: string) => void;
  onLikeComment?: (postId: string, commentId: string) => void;
}

export default function DiscussionForum({
  posts,
  onLikePost,
  onAddComment,
  onLikeComment,
}: DiscussionForumProps) {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [commentContent, setCommentContent] = useState<string>('');
  
  const handleToggleExpand = (postId: string) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };
  
  const handleAddComment = (postId: string) => {
    if (commentContent.trim() && onAddComment) {
      onAddComment(postId, commentContent);
      setCommentContent('');
    }
  };
  
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id} className="shadow-sm">
          <CardHeader>
            <div className="flex justify-between">
              <div className="flex items-center space-x-3">
                {post.author.avatar ? (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                    {post.author.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h3 className="font-medium">{post.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.author.name}</span>
                    <span className="mx-1">•</span>
                    <span>{post.timestamp}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-1">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          
          <CardBody>
            <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
          </CardBody>
          
          <CardFooter className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button 
                className="flex items-center text-gray-500 hover:text-blue-600"
                onClick={() => onLikePost?.(post.id)}
              >
                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span>{post.likes}</span>
              </button>
              
              <button 
                className="flex items-center text-gray-500 hover:text-blue-600"
                onClick={() => handleToggleExpand(post.id)}
              >
                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span>{post.comments.length}</span>
              </button>
              
              <button className="flex items-center text-gray-500 hover:text-blue-600">
                <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share</span>
              </button>
            </div>
            
            <button 
              className="text-sm text-blue-600 hover:text-blue-800"
              onClick={() => handleToggleExpand(post.id)}
            >
              {expandedPost === post.id ? 'Hide comments' : 'View all comments'}
            </button>
          </CardFooter>
          
          {expandedPost === post.id && (
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-4 mb-4">
                {post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <div key={comment.id} className="flex space-x-3">
                      {comment.author.avatar ? (
                        <img 
                          src={comment.author.avatar} 
                          alt={comment.author.name} 
                          className="w-8 h-8 rounded-full flex-shrink-0"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-medium flex-shrink-0">
                          {comment.author.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{comment.author.name}</span>
                            <span className="text-xs text-gray-500">{comment.timestamp}</span>
                          </div>
                          <p className="text-sm">{comment.content}</p>
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <button 
                            className="flex items-center hover:text-blue-600"
                            onClick={() => onLikeComment?.(post.id, comment.id)}
                          >
                            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            <span>{comment.likes}</span>
                          </button>
                          <button className="ml-3 hover:text-blue-600">Reply</button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 text-sm">No comments yet. Be the first to comment!</p>
                )}
              </div>
              
              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium flex-shrink-0">
                  Y
                </div>
                <div className="flex-1">
                  <textarea
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Add a comment..."
                    rows={2}
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => handleAddComment(post.id)}
                    >
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
