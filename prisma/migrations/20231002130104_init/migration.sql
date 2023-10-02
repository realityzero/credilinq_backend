-- CreateTable
CREATE TABLE "SmeHealthcheck" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "company_uen" VARCHAR(10) NOT NULL,
    "company_name" VARCHAR(250) NOT NULL,
    "full_name" VARCHAR(250) NOT NULL,
    "position_within_company" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "documents" JSONB NOT NULL,

    CONSTRAINT "SmeHealthcheck_pkey" PRIMARY KEY ("id")
);
