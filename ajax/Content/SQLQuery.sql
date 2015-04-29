IF OBJECT_ID('Position') IS NOT NULL
DROP TABLE Position;

GO 

IF OBJECT_ID('School_Program') IS NOT NULL
DROP TABLE School_Program;

GO 

IF OBJECT_ID('School_Department') IS NOT NULL
DROP TABLE School_Department;

GO 

IF OBJECT_ID('Education') IS NOT NULL
DROP TABLE Education;

GO 

IF OBJECT_ID('Photo') IS NOT NULL
DROP TABLE Photo;

GO 

IF OBJECT_ID('Work_History') IS NOT NULL
DROP TABLE Work_History;

GO 

IF OBJECT_ID('Post') IS NOT NULL
DROP TABLE Post;

GO

IF OBJECT_ID('Profile') IS NOT NULL
DROP TABLE Profile;

GO

CREATE TABLE Profile(
	UserId INT PRIMARY KEY,
	DOB TIME NOT NULL,
	LastName VARCHAR(30) NOT NULL,
	FirstName VARCHAR(30) NOT NULL,
	ProfilePhoto VARCHAR(255),
	AlbumName VARCHAR(30),
	AlbumAllPublished BIT DEFAULT 0
);

CREATE TABLE Post(
	PostId INT PRIMARY KEY,
	PostContent VARCHAR(4000) NOT NULL,
	LikeToken BIT DEFAULT 0,
	UserId INT,
	FOREIGN KEY (UserId) REFERENCES ryanajaxuser.Profile (UserId) 
);

CREATE TABLE Photo(
	PhotoId INT PRIMARY KEY,
	PhotoName VARCHAR(50),
	LikeToken BIT DEFAULT 0,
	Published BIT DEFAULT 0,
	UserId INT,
	FOREIGN KEY (UserId) REFERENCES ryanajaxuser.Profile (UserId)
);

CREATE TABLE Work_History(
	CompanyName VARCHAR(255),
	UserId INT,
	StartDate TIME NOT NULL,
	EndDate TIME,
	CurrentJob BIT DEFAULT 0
	FOREIGN KEY (UserId) REFERENCES ryanajaxuser.Profile (UserId),
	PRIMARY KEY (CompanyName, UserId)
);

CREATE TABLE Position(
	JobTitle VARCHAR(100),
	CompanyName VARCHAR(255),
	UserId INT,
	FOREIGN KEY (CompanyName, UserId) REFERENCES ryanajaxuser.Work_History (CompanyName, UserId),
	PRIMARY KEY (JobTitle, CompanyName, UserId)
);

CREATE TABLE Education(
	EducationId INT PRIMARY KEY,
	School VARCHAR(100) NOT NULL,
	Education_Level VARCHAR(20) NOT NULL,
	UserId INT,
	FOREIGN KEY (UserId) REFERENCES ryanajaxuser.Profile (UserId),
);

CREATE TABLE School_Department(
	DepartmentId INT PRIMARY KEY,
	Department VARCHAR(100) NOT NULL,
	EducationId INT,
	FOREIGN KEY (EducationId) REFERENCES Education (EducationId)
);

CREATE TABLE School_Program(
	ProgramId INT PRIMARY KEY,
	Program VARCHAR(100),
	DepartmentId INT,
	FOREIGN KEY (DepartmentId) REFERENCES School_Department (DepartmentId)
);

