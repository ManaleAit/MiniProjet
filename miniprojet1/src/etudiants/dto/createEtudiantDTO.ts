import { IsString, MinLength, MaxLength, IsNumber, IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Double } from "typeorm";

export class CreateEtudiantDTO{


    
    @IsString()
    @MinLength(30)
    @MaxLength(30)
    @ApiProperty()
    parents_address:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    parents_phone:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    annee:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    type_bac:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    mention_bac:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    mother_job:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    annee_bac:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    lycee:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    delegation:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    academie:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    father_name:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    father_job:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    massar:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    picture:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    mother_name:string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    address:string;
    
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @ApiProperty()
    phone:string;

    @IsString()
    @MinLength(30)
    @MaxLength(30)
    @ApiProperty()
    validated:Double;

    @IsString()
    @MinLength(4)
    @MaxLength(8)
    @ApiProperty()
    natio:string;

    @IsString()
    @MinLength(4)
    @MaxLength(8)
    @ApiProperty()
    cin:string;

    @IsNumber()
    @ApiProperty()
    note:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    firstname_fr:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    firstname_ar:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    lastname_fr:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    lastname_ar:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    email:string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @ApiProperty()
    password:string;

    @IsString()
    @ApiProperty()
    photo:string;

    @IsNumber()
    @ApiProperty()
    niveau:number;

    @IsString()
    @MinLength(8)
    @ApiProperty()
    adresse:string;

    @IsDate()
    @ApiProperty()
    date_naissance:Date;

    @IsNumber()
    @ApiProperty()
    id_filiere: number;
}