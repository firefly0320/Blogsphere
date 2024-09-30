import conf from "../conf/conf";
import {Client,Databases,Query,Storage,ID} from "appwrite";

export class Service{
    client=new Client();
     bucket;
     databases;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases= new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredimage,userId,status}){
         try  { 
            return await this.databases.createDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               slug,
               {
                title,
                content,
                featuredimage,
                userId,
                status
               }
            )} catch (error) {
            throw error;
         }
        
    }

    async updatePost(slug,{title,content,featuredimage,status}){
        try {
            return await this.databases.updatePost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                 title,
                 content,
                 featuredimage,
                 userId,
                 status
                }
             )   
            
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
           await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;
        }
        return false;
    }

    async getDoc(slug){
        try {
          return  await this.databases.getDocument(
                 conf.appwriteDatabaseId,
                 conf.appwriteCollectionId,
                 slug
             )
              } catch (error) {
             throw error;
         }
    }

    async getlist(queries=[Query.equal("status","Active")]){
        try {
            return  await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                 queries)
        } catch (error) {
            throw error;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deletefile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            throw error;
        }
    }

    getfilePreview(fileId){
        try {
            return  this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error;
        }
    }
}

const service=new Service();
export default Service;
