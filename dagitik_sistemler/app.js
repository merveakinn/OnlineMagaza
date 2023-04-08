const COLLECTIONS_DUMP =COLLECTIONS;
 

const listCollections = () => {
    const collectionEl = document.querySelector(".collections");
    collectionEl.innerHTML = "";
    COLLECTIONS.forEach(collection => {
        let collectionsItemHtml = `<div class="collections_item">
        <div class="collection_container">
        <img class="collection_img" src="${collection.img}" height="350">
        <div>
        <strong>${collection.name}</strong>
        <span>Stokta Var</span><br>
        <span>Tarih</span>
        </div>
        <div class="collection_price">
            <strong>${collection.price}</strong>
        </div>
      </div>
    </div>`;
        collectionEl.insertAdjacentHTML("beforeend", collectionsItemHtml)
    });
};











const searchCollections = (searchKey) => {
    if(searchKey.length >1){
    COLLECTIONS = COLLECTIONS_DUMP.filter((c) =>
     c.name.toLowerCase.includes(searchKey.toLowerCase())
     );
    }else{
    COLLECTIONS = COLLECTIONS_DUMP;
    }
    listCollections();
};

createCategories();
listCollections();