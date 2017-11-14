import axios from "axios";

export default {
  getNewsArticles: function(query, start, end) {
    return axios.get(
      "http://api.nytimes.com/svc/search/v2/articlesearch.json",
      {
        params: {
          "api-key": "7c2601a5adaa45c5b4fc4a8aa8608650",
          q: query,
          begin_date: start + "0101",
          end_date: end + "1231"
        }
      }
    );
  },
    getDatabase: function() {
      return axios.get("api/articles");
    },
    saveArticles: function(articles) {
    return axios.post("/api/articles", articles);
  },
    deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
};
