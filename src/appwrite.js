import {Client, Databases, Query} from "appwrite";
import search from "./Component/Search.jsx";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(PROJECT_ID);

 const database = new Databases(client);

 export  const updateSearchCount = async (searchItem, movie) => {

     const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,
         [Query.equal('searchTerm', searchItem),
         ]);
     if(result.documents.length> 0){

     }else{

     }
}
