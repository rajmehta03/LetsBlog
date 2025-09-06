import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Camera, File, Bold, Italic, Underline, Hash, Eye, EyeOff, Image } from "lucide-react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [isPreview, setIsPreview] = useState(false);

  // File select or camera capture
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Cover image handler
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  // Tags handler
  const handleTagAdd = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
    }
    setTagInput("");
  };

  const handleTagRemove = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // Formatting functions
  const applyFormat = (format) => {
    const textarea = document.getElementById("contentInput");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    let formatted = selectedText;

    if (format === "bold") formatted = `**${selectedText}**`;
    if (format === "italic") formatted = `*${selectedText}*`;
    if (format === "underline") formatted = `__${selectedText}__`;

    const newText =
      content.substring(0, start) + formatted + content.substring(end);
    setContent(newText);
  };

  // Submit (Publish)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      content,
      tags,
      coverImage,
      file: selectedFile,
    });
    alert("✅ Post Published Successfully!");
    resetForm();
  };

  // Save Draft
  const handleSaveDraft = () => {
    console.log("💾 Draft Saved:", {
      title,
      content,
      tags,
      coverImage,
      file: selectedFile,
    });
    alert("💾 Draft Saved!");
  };

  // Reset
  const resetForm = () => {
    setTitle("");
    setContent("");
    setTags([]);
    setSelectedFile(null);
    setPreviewUrl(null);
    setCoverImage(null);
    setCoverPreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            📝 Write a New Blog
          </h1>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md space-y-6">
            {!isPreview ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Cover Image */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Cover Image
                  </label>
                  <label className="flex items-center justify-center w-full px-5 py-3 border border-dashed border-zinc-300 dark:border-zinc-600 rounded-lg cursor-pointer hover:bg-rose-50 dark:hover:bg-zinc-700 transition">
                    <Image className="w-5 h-5 mr-2 text-rose-600" />
                    <span className="text-sm">Upload Cover</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleCoverChange}
                      className="hidden"
                    />
                  </label>
                  {coverPreview && (
                    <img
                      src={coverPreview}
                      alt="Cover Preview"
                      className="w-full max-h-72 object-cover rounded-lg mt-4 shadow-md"
                    />
                  )}
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700 dark:text-white focus:ring-2 focus:ring-rose-500 text-lg font-semibold"
                    placeholder="Enter blog title..."
                    required
                  />
                </div>

                {/* Content with Toolbar */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      type="button"
                      onClick={() => applyFormat("bold")}
                      className="p-2 rounded hover:bg-rose-100 dark:hover:bg-zinc-700"
                    >
                      <Bold className="w-4 h-4 text-rose-600" />
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat("italic")}
                      className="p-2 rounded hover:bg-rose-100 dark:hover:bg-zinc-700"
                    >
                      <Italic className="w-4 h-4 text-rose-600" />
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat("underline")}
                      className="p-2 rounded hover:bg-rose-100 dark:hover:bg-zinc-700"
                    >
                      <Underline className="w-4 h-4 text-rose-600" />
                    </button>
                  </div>
                  <textarea
                    id="contentInput"
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-3 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700 dark:text-white focus:ring-2 focus:ring-rose-500"
                    placeholder="Start writing your story..."
                    required
                  />
                  <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    <span>{content.length} characters</span>
                    <span>{content.split(/\s+/).filter(Boolean).length} words</span>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Tags
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      className="flex-1 p-2 border border-zinc-300 dark:border-zinc-600 rounded-lg dark:bg-zinc-700 dark:text-white"
                      placeholder="Add a tag"
                      onKeyDown={(e) => e.key === "Enter" && handleTagAdd(e)}
                    />
                    <button
                      type="button"
                      onClick={handleTagAdd}
                      className="px-3 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm dark:bg-zinc-700 dark:text-rose-300"
                      >
                        <Hash className="w-3 h-3" />
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleTagRemove(tag)}
                          className="ml-1 text-xs text-red-500"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
                    Attach Media
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center justify-center w-full sm:w-auto px-5 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg cursor-pointer hover:bg-rose-50 dark:hover:bg-zinc-700 transition">
                      <File className="w-5 h-5 mr-2 text-rose-600" />
                      <span className="text-sm">Choose File</span>
                      <input
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>

                    <label className="flex items-center justify-center w-full sm:w-auto px-5 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg cursor-pointer hover:bg-rose-50 dark:hover:bg-zinc-700 transition">
                      <Camera className="w-5 h-5 mr-2 text-rose-600" />
                      <span className="text-sm">Take Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {previewUrl && (
                    <div className="mt-4">
                      {selectedFile?.type.startsWith("image/") ? (
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="w-full max-h-72 object-cover rounded-lg shadow-md"
                        />
                      ) : (
                        <video
                          controls
                          src={previewUrl}
                          className="w-full max-h-72 rounded-lg shadow-md"
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    className="bg-zinc-500 text-white px-6 py-3 rounded-lg hover:bg-zinc-600 transition-colors shadow-md"
                  >
                    💾 Save Draft
                  </button>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPreview(true)}
                      className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-2" /> Preview
                    </button>
                    <button
                      type="submit"
                      className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors shadow-md"
                    >
                      🚀 Publish
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              // Preview Mode
              <div className="space-y-6">
                {coverPreview && (
                  <img
                    src={coverPreview}
                    alt="Cover"
                    className="w-full max-h-80 object-cover rounded-lg shadow-md"
                  />
                )}
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {title || "Untitled Blog"}
                </h2>
                <div className="text-zinc-600 dark:text-zinc-300 whitespace-pre-line">
                  {content || "No content yet..."}
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm dark:bg-zinc-700 dark:text-rose-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setIsPreview(false)}
                  className="mt-6 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center"
                >
                  <EyeOff className="w-4 h-4 mr-2" /> Back to Edit
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePost;
