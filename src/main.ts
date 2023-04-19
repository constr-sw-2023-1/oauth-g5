import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Construção de Software')
    .setVersion('1.0')
    .addTag('oauth')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      baseUrl: 'http://oauth:3000',
    },
  });

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
