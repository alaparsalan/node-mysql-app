import { Injectable  } from "@nestjs/common";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";

@Injectable()
export class DataBaseConnectionService implements TypeOrmOptionsFactory {

     createTypeOrmOptions():TypeOrmModuleOptions{
        var mysqlHost = process.env.MYSQL_HOST || 'localhost';
        var mysqlPort = process.env.MYSQL_PORT || '3306';
        var mysqlUser = process.env.MYSQL_USER || 'root';
        var mysqlPass = process.env.MYSQL_PASS ;
        var mysqlDB   = process.env.MYSQL_DB   || 'lrnipdb';
        console.log(`
        MYSQL_HOST : ${process.env.MYSQL_HOST}
        MYSQL_PORT : ${process.env.MYSQL_PORT}
        MYSQL_USER : ${process.env.MYSQL_USER}
        MYSQL_PASS : ${process.env.MYSQL_PASS}
        MYSQL_DB : ${process.env.MYSQL_DB}`)
         return {
             name:'default',
             type:'mysql',
             host: mysqlHost,
             port: parseInt(mysqlPort),
             username: mysqlUser,
             password: mysqlPass,
             database: mysqlDB,//process.env.DATABASE_DB,
             synchronize: true,
             dropSchema: false,
             logging: true,
             entities: ['dist/**/*.entity.js'],
         }
     }
}