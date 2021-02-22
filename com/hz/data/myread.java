package com.hz.data;
import java.util.Arrays;
import com.mongodb.Block;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.MongoException;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class myread {
    public static void main(String[] args) {
        System.out.println("开始Java  --> MongoDB 读取数据库之旅!");
        System.out.println("Let's Begin!");
        //readMongodb("localhost",47017,"r*t","admin","Aa1*6","parserdata","judgment");
    }

    private static void readMongodb(String addr,int port,String userName,String authDB,String passWd,String dbName,String colName) {
        ServerAddress judgmentAddress = new ServerAddress(addr, port);
        MongoCredential credential = MongoCredential.createCredential(userName,authDB, passWd.toCharArray());
        try (MongoClient client = new MongoClient(judgmentAddress,
                Arrays.asList(new MongoCredential[] { credential }))) {
            MongoDatabase database = client.getDatabase(dbName);
            MongoCollection<Document> collection = database.getCollection(colName);

            // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

            Document query = new Document();
            query.append("cause", "农村建房施工合同纠纷");//\u5EFA\u8BBE\u5DE5\u7A0B\u5408\u540C\u7EA0\u7EB7

            int limit =2;

            Block<Document> processBlock = new Block<Document>() {
                @Override
                public void apply(final Document document) {
                    System.out.println(document);
                }
            };

            collection.find(query).limit(limit).forEach(processBlock);


        } catch (MongoException e) {
            // handle MongoDB exception
        }
    }
}
