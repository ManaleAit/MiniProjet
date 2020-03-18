import {
    Injectable,
    ConflictException,
    InternalServerErrorException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { etudiant } from './etudiant.entity';
  import { etudiantRepository } from './etudiant.repository';
  import { InjectRepository } from '@nestjs/typeorm';
  import { CreateEtudiantDTO } from './dto/createEtudiantDTO';
  import { AuthDTO } from './dto/AuthDTO';
  import { JwtService } from '@nestjs/jwt';
  import * as bcrypt from 'bcrypt';
  import { JwtPayload } from 'src/candidatures/jwt-payload.interface';
  
  @Injectable()
  export class etudiantsService {
    etudiantRepository: any;
    constructor(
      @InjectRepository(etudiantRepository)
      private EtudRepository: etudiantRepository,
      private jwtService: JwtService,
    ) {}
  
    async getAllEtudiants(): Promise<etudiant[]> {
      return await this.EtudRepository.find();
    }
  
    async createEtudiant(createEtDTO: CreateEtudiantDTO): Promise<void> {
      // generate salt
      const salt = await bcrypt.genSalt();
  
      // create new etudiant
      var Et = this.etudiantRepository.create();
      Et.massar=createEtDTO.massar;
      Et.cin=createEtDTO.cin;
      Et.validated=createEtDTO.validated;
      Et.lastname_ar=createEtDTO.lastname_ar;
      Et.lastname_fr=createEtDTO.lastname_fr;
      Et.firstname_ar=createEtDTO.firstname_ar;
      Et.firstname_fr=createEtDTO.firstname_fr;
      Et.note=createEtDTO.note;
      Et.password=createEtDTO.password;
      Et.natio=createEtDTO.natio;
      Et.address=createEtDTO.address;
      Et.phone=createEtDTO.phone;
      Et.father_job=createEtDTO.father_job;
      Et.father_name=createEtDTO.father_name;
      Et.parents_phone=createEtDTO.parents_phone;
      Et.natio=createEtDTO.natio;
      Et.parents_phone=createEtDTO.parents_phone;
      Et.annee=createEtDTO.annee;
      Et.type_bac=createEtDTO.type_bac;
      Et.mention_bac=Et.mention_bac;
      Et.annee_bac=createEtDTO.annee_bac;
      Et.lycee=createEtDTO.lycee;
      Et.delegation=Et.delegation;
      Et. academie=createEtDTO.academie;
      Et. picture=Et. picture;
    
  
     
      
      try {
          await this.EtudRepository.insert(Et);
      } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          throw new ConflictException('Code Massar , CIN or Email Already Exist');
        }else {
          throw new InternalServerErrorException();
        }
      }
    }
  
    async signIn(authDTO: AuthDTO): Promise<{ accessToken: string }> {
      const { massar, email, password } = authDTO;
  
      const etudiant = await this.EtudRepository.findOne({
        email,
        massar,
      });
  
      if (etudiant) {
        if (await etudiant.validatePassword(password)) {
          const payload: JwtPayload = { massar, email };
  
          const accessToken = await this.jwtService.sign(payload);
  
          return { accessToken };
        } else {
          throw new UnauthorizedException('Invalid Credentials');
        }
      } else {
        throw new UnauthorizedException('Invalid Credentials');
      }
    }
  
    async hashPassword(password: string, salt: string): Promise<string> {
      return await bcrypt.hash(password, salt);
    }
  }
  