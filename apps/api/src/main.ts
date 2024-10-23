import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      filter: true,
      persistAuthorization: true,
    },
  });

  await app.listen(process.env.port ?? 3000);
}
bootstrap();

const swaggerOptions = new DocumentBuilder()
  .setTitle('Basic Structure NestJs')
  .setDescription('Basic Structure')
  .setVersion('0.0.1')
  .addBearerAuth()
  .addSecurityRequirements('bearer')
  .build();
