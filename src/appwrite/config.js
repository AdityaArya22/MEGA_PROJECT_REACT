import config from "../config/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;//storage

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImg,status,userID}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, // Document ID
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userID
                },
            )
        } catch (error) {
            console.log("Appwrite Service erroe :: ", error)
        }
    }

    async updatePost(slug,{title,content,featuredImg,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,// Document ID
                {
                    title,
                    content,
                    featuredImg,
                    status
                }
            )
        } catch (error) {
            console.log("Appwite error in updataing", error);
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug// Document ID
            )
            return true
        } catch (error) {
            console.log("Appwrite error in deleting post!! ::: ", error);
            return false
        }        
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug // Document ID


            )
        } catch (error) {
            console.log("Appwrite Error in get Post", error);
            return false
        }
    }


    // Remember to add Indexs else Query wont work
    async listPost(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
                //also be written as
                /*[
                    Query.equal("status","active")
                ]*/

            )
        } catch (error) {
            console.log("Appwrite Error loading list of posts", error);
            return false
        }
    }

    // File upload services

    async uploadFile(fileID){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                fileID
            )
        } catch (error) {
            console.log("Appwrite service error uploading file ", error);
            return false
        }
    }

    async deleteFile(fileID){
       try {
         await this.bucket.deleteFile(
            config.appwriteBucketId,
            fileID,
        )
        return true
       } catch (error) {
        console.log("Appwrite service error deleting file", error);
        return false
       }

    }

     filePreview(fileID){
        try {
            return  this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileID
            )
        } catch (error) {
            console.log("Appwrite service error previewing file", error);
            return false
        }
    }
}
const service = new Service()
export default service

