import BlogCard from "./components/BlogCard";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <BlogCard
        image="assets/images/Blog Image.png"
        category="Learning"
        title="HTML & CSS foundations"
        description="These languages are the backbone of every website, defining structure, content, and presentation."
        authorName="Greg Hooper"
        authorAvatar="assets/images/avatar_male.png"
        date="23 Jan 2025"
      />
    </div>
  );
}

export default App;
