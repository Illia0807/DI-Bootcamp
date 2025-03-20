import * as postModel from "../models/postModel.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.getPostById(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await postModel.createPost(title, content);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await postModel.updatePost(id, title, content);
    if (updatedPost) {
      res.json(updatedPost);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.deletePost(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
