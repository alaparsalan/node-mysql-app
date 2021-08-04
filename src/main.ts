import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const options = new DocumentBuilder()
    .setTitle('learnip Crud')
    .setDescription('The learn-Ip API description')
    .setVersion('1.0')
    .addTag('student')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(configService.get('PORT'));
}
bootstrap();
