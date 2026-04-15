function search(e) {
    const query = document.getElementById("search_box").value.trim();
    if (!query) return;
    const url = `https://open.spotify.com/search/${encodeURIComponent(query)}`;
    window.open(url, "_blank");
    query.value = "";
}
