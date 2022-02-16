import React, { useState, useEffect, FC } from "react";
import style from "./booklist.module.scss";
import API from "../../services/api.service";

interface Provider {
  author: string;
  cteated_at: string;
  id: string;
  image: string;
  name: string;
  status: string;
  user_id: string;
}

const BooklistComponent: FC<any> = () => {
  const [booklist, setBooklist] = useState<Provider[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await API.get("books/list/1");
      setBooklist(res?.data?.data);
    }

    getData();
  }, []);

  const editHandler = (data:Provider) => {
    console.log(data);
  } 

  const getbookList = () => {
    if (booklist && booklist.length){
      return booklist.map((item: Provider) => {
        const {author, cteated_at, id, image, name, status, user_id} = item;
        return (
          <div className={style.book_1} key={id}>
            <div className={style.bookLeft}>
              <div className={style.bookTemplate}>
                <img className={style.bookTemp} src={image} alt="" />
              </div>
              <div className={style.bookDetails}>
                <p className={style.bookName}>{name}-{id} </p>
                <p className={style.bookCreater}>By-{author}</p>
                <p className={style.bookcreatedTime}>
                  Created at-{cteated_at}
                </p>
              </div>
            </div>
            <div className={style.bookRight}>
              <div className={style.editButton}>
                <button className={style.editBook} onClick={()=>editHandler(item)}>Edit</button>
              </div>
            </div>
          </div>
        );
      });  
    }
    else{
      console.log ("inside Else")
    }
    
  };

  return (
    <div>
      <div className={style.Container}>
        <div className={style.Header}>
          <p className={style.headerTitle}>Assignment</p>
        </div>
        <div className={style.landing}>
          <div className={style.sidebar}>
            <div className={style.sidebarContent}>
              <div className={style.list}>Book List</div>
              <div className={style.list2}>Create Book</div>
            </div>
          </div>
          <div className={style.booklist}>
            <div className={style.booklistHeader}>
              <p className={style.headerTitle}>Book List</p>
              <div className={style.booksLibrary}>{getbookList()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooklistComponent;
