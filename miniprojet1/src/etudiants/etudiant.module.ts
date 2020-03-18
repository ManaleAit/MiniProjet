import { Module } from '@nestjs/common';
import { etudiantsService  } from './etudiant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { etudiantRepository } from './etudiant.repository';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { EtudiantsController } from './etudiants.controller';
import { JwtStrategy } from 'src/candidatures/jwt.strategy';
import { JwtAdminStrategy } from 'src/admin/jwt-admin.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from 'config/jwt.config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt-admin' }),
    JwtModule.register({
      secret: JwtConstants.secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([ etudiantRepository, FiliereRepository]),
  ],
  providers: [etudiantsService],
  controllers: [EtudiantsController]
})
export class EtudiantModule {}

