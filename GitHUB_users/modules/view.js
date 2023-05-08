function viewReposetories(results, elem) {
  elem.innerHTML = "";
  results.forEach((result) => {
    console.log(result);
    console.log();
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = result.name;
    a.href = result.clone_url;
    a.setAttribute("target", "_blank");
    li.appendChild(a);
    elem.appendChild(li);
  });
}
export default viewReposetories;
