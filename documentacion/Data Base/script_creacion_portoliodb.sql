SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `portfoliodb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `portfoliodb` ;

-- -----------------------------------------------------
-- Table `portfoliodb`.`persona`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`persona` (
  `nombre` VARCHAR(45) NOT NULL ,
  `apellido` VARCHAR(45) NOT NULL ,
  `fechaNacimiento` DATETIME NULL ,
  `Personacol` VARCHAR(45) NULL ,
  `direcion` VARCHAR(45) NULL ,
  `email` VARCHAR(45) NULL ,
  `telefono` VARCHAR(45) NULL ,
  `id` INT NOT NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`educacion`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`educacion` (
  `id` INT NOT NULL ,
  `nombre` VARCHAR(45) NULL ,
  `descripcion` VARCHAR(80) NULL ,
  `direccion` VARCHAR(45) NULL ,
  `fechaInicio` DATETIME NULL ,
  `fechaFin` DATETIME NULL ,
  `persona_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_Educacion_Persona1_idx` (`persona_id` ASC) ,
  CONSTRAINT `fk_Educacion_Persona1`
    FOREIGN KEY (`persona_id` )
    REFERENCES `portfoliodb`.`persona` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`Habilidades`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`Habilidades` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`Proyectos`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`Proyectos` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`habilidad`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`habilidad` (
  `id` INT NOT NULL ,
  `nombre` VARCHAR(45) NULL ,
  `descripcion` VARCHAR(80) NULL ,
  `porcentaje` VARCHAR(45) NULL ,
  `fechaInicio` DATETIME NULL ,
  `persona_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_Habilidades_Persona1_idx` (`persona_id` ASC) ,
  CONSTRAINT `fk_Habilidades_Persona1`
    FOREIGN KEY (`persona_id` )
    REFERENCES `portfoliodb`.`persona` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`proyecto`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`proyecto` (
  `id` INT NOT NULL ,
  `nombre` VARCHAR(45) NULL ,
  `descripcion` VARCHAR(80) NULL ,
  `fechaInicio` DATETIME NULL ,
  `fechaFin` DATETIME NULL ,
  `persona_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_Proyectos_Persona1_idx` (`persona_id` ASC) ,
  CONSTRAINT `fk_Proyectos_Persona1`
    FOREIGN KEY (`persona_id` )
    REFERENCES `portfoliodb`.`persona` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`Educacion_copy1`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`Educacion_copy1` (
  `idEducacion` INT NOT NULL ,
  `nombre` VARCHAR(45) NULL ,
  `descripcion` VARCHAR(80) NULL ,
  `direccion` VARCHAR(45) NULL ,
  `fechaInicio` DATETIME NULL ,
  `fechaFin` DATETIME NULL ,
  PRIMARY KEY (`idEducacion`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`Educacion_copy2`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`Educacion_copy2` (
  `idEducacion` INT NOT NULL ,
  `nombre` VARCHAR(45) NULL ,
  `descripcion` VARCHAR(80) NULL ,
  `direccion` VARCHAR(45) NULL ,
  `fechaInicio` DATETIME NULL ,
  `fechaFin` DATETIME NULL ,
  PRIMARY KEY (`idEducacion`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`experiencia`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`experiencia` (
  `id` INT NOT NULL ,
  `nombre` VARCHAR(45) NULL ,
  `descripcion` VARCHAR(80) NULL ,
  `cargo` VARCHAR(45) NULL ,
  `fechaInicio` DATETIME NULL ,
  `fechaFin` DATETIME NULL ,
  `persona_id` INT NOT NULL ,
  PRIMARY KEY (`id`) ,
  INDEX `fk_Experiencia_Persona1_idx` (`persona_id` ASC) ,
  CONSTRAINT `fk_Experiencia_Persona1`
    FOREIGN KEY (`persona_id` )
    REFERENCES `portfoliodb`.`persona` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`RedSocial`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`RedSocial` (
  `id` INT NOT NULL ,
  `nombre` VARCHAR(45) NULL ,
  `alias` VARCHAR(45) NULL ,
  `direccion` VARCHAR(45) NULL ,
  PRIMARY KEY (`id`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`RedesSociales_has_RedesSociales`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`RedesSociales_has_RedesSociales` (
  `RedesSociales_idRedesSociales` INT NOT NULL ,
  `RedesSociales_idRedesSociales1` INT NOT NULL ,
  PRIMARY KEY (`RedesSociales_idRedesSociales`, `RedesSociales_idRedesSociales1`) ,
  INDEX `fk_RedesSociales_has_RedesSociales_RedesSociales2_idx` (`RedesSociales_idRedesSociales1` ASC) ,
  INDEX `fk_RedesSociales_has_RedesSociales_RedesSociales1_idx` (`RedesSociales_idRedesSociales` ASC) ,
  CONSTRAINT `fk_RedesSociales_has_RedesSociales_RedesSociales1`
    FOREIGN KEY (`RedesSociales_idRedesSociales` )
    REFERENCES `portfoliodb`.`RedSocial` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RedesSociales_has_RedesSociales_RedesSociales2`
    FOREIGN KEY (`RedesSociales_idRedesSociales1` )
    REFERENCES `portfoliodb`.`RedSocial` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `portfoliodb`.`persona_has_red_social`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `portfoliodb`.`persona_has_red_social` (
  `persona_idPersona` INT NOT NULL ,
  `redSocial_idRedSocial` INT NOT NULL ,
  PRIMARY KEY (`persona_idPersona`, `redSocial_idRedSocial`) ,
  INDEX `fk_Persona_has_RedesSociales_RedesSociales1_idx` (`redSocial_idRedSocial` ASC) ,
  INDEX `fk_Persona_has_RedesSociales_Persona1_idx` (`persona_idPersona` ASC) ,
  CONSTRAINT `fk_Persona_has_RedesSociales_Persona1`
    FOREIGN KEY (`persona_idPersona` )
    REFERENCES `portfoliodb`.`persona` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Persona_has_RedesSociales_RedesSociales1`
    FOREIGN KEY (`redSocial_idRedSocial` )
    REFERENCES `portfoliodb`.`RedSocial` (`id` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `portfoliodb` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
