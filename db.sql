--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2023-04-14 13:03:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 16403)
-- Name: departamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departamento (
    codigo bigint NOT NULL,
    nombre character varying(100) NOT NULL,
    presupuesto double precision NOT NULL
);


ALTER TABLE public.departamento OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16402)
-- Name: departamento_codigo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.departamento_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.departamento_codigo_seq OWNER TO postgres;

--
-- TOC entry 3324 (class 0 OID 0)
-- Dependencies: 211
-- Name: departamento_codigo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.departamento_codigo_seq OWNED BY public.departamento.codigo;


--
-- TOC entry 210 (class 1259 OID 16396)
-- Name: empleado; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.empleado (
    codigo bigint NOT NULL,
    nif character varying(9) NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido1 character varying(100) NOT NULL,
    apellido2 character varying(100) NOT NULL,
    codigo_departamento integer NOT NULL
);


ALTER TABLE public.empleado OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: empleado_codigo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.empleado_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.empleado_codigo_seq OWNER TO postgres;

--
-- TOC entry 3325 (class 0 OID 0)
-- Dependencies: 209
-- Name: empleado_codigo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.empleado_codigo_seq OWNED BY public.empleado.codigo;


--
-- TOC entry 3170 (class 2604 OID 16406)
-- Name: departamento codigo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departamento ALTER COLUMN codigo SET DEFAULT nextval('public.departamento_codigo_seq'::regclass);


--
-- TOC entry 3169 (class 2604 OID 16399)
-- Name: empleado codigo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empleado ALTER COLUMN codigo SET DEFAULT nextval('public.empleado_codigo_seq'::regclass);


--
-- TOC entry 3318 (class 0 OID 16403)
-- Dependencies: 212
-- Data for Name: departamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departamento (codigo, nombre, presupuesto) FROM stdin;
1	Comercial	599.99
2	Marketing	1299.99
3	TI	299.99
4	RRHH	799.99
\.


--
-- TOC entry 3316 (class 0 OID 16396)
-- Dependencies: 210
-- Data for Name: empleado; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.empleado (codigo, nif, nombre, apellido1, apellido2, codigo_departamento) FROM stdin;
\.


--
-- TOC entry 3326 (class 0 OID 0)
-- Dependencies: 211
-- Name: departamento_codigo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departamento_codigo_seq', 5, true);


--
-- TOC entry 3327 (class 0 OID 0)
-- Dependencies: 209
-- Name: empleado_codigo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.empleado_codigo_seq', 9, true);


--
-- TOC entry 3174 (class 2606 OID 16408)
-- Name: departamento departamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departamento
    ADD CONSTRAINT departamento_pkey PRIMARY KEY (codigo);


--
-- TOC entry 3172 (class 2606 OID 16401)
-- Name: empleado empleado_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empleado
    ADD CONSTRAINT empleado_pkey PRIMARY KEY (codigo);


--
-- TOC entry 3175 (class 2606 OID 16409)
-- Name: empleado codigo_departamento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empleado
    ADD CONSTRAINT codigo_departamento_fkey FOREIGN KEY (codigo_departamento) REFERENCES public.departamento(codigo) ON UPDATE CASCADE ON DELETE CASCADE NOT VALID;


-- Completed on 2023-04-14 13:03:13

--
-- PostgreSQL database dump complete
--

