# <img width="76" height="64" alt="IDEE-Git" src="https://github.com/user-attachments/assets/fa7715c9-9a36-4445-9917-597d2e392928" /> Metadatos Geográficos

## Objetivo

Descripción de los elementos mínimos de metadatos defindos en las normas internacionales **ISO 19115/ISO 19119** que cubren los elementos de metadatos del [Reglamento (CE) No 1205/2008 en lo que se refiere a los metadatos](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:326:0012:0030:ES:PDF) para describir: 
- conjuntos de datos espaciales,
- series de conjuntos de datos espaciales,
- y servicios de datos espaciales  

---

## Contexto normativo

- [Directiva Inspire 2007/2/CE1 establece las reglas generales para la formación de una Infraestructura de Datos Espaciales en la Comunidad Europea](https://www.boe.es/doue/2007/108/L00001-00014.pdf).
- [Ley 14/2010, de 5 de julio, sobre las infraestructuras y los servicios de información geográfica en España (LISIGE)](https://www.boe.es/eli/es/l/2010/07/05/14/dof/spa/pdf).
- [Reglamento (CE) No 1205/2008 en lo que se refiere a los metadatos](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:326:0012:0030:ES:PDF).
- Corrección de errores del Reglamento (CE) Nº 1205/2008.
- Directrices Técnicas sobre metadatos: [Technical Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007](https://knowledge-base.inspire.ec.europa.eu/publications/technical-guidance-implementation-inspire-dataset-and-service-metadata-based-isots-191392007_en)
---

## Historial de Revisiones

- 0.0.1 - Sep 2025 - Primera versión, borrador . mockup-metadatos1
- 0.0.2 - Nov 2025 - Segunda versión, borrador . mockup-metadatos2
- 0.0.3 - Dic 2025 - Tercera versión, borrador . mockup-metadatos3

---

# Elementos de metadatos

## Metadatos para conjuntos de datos y series espaciales
| Descripción | Dominio | Cardinalidad | Propiedad |
|---|---|:---:|---|
| **Identificador único del registro de metadatos**| Texto libre | 1 | `gmd:fileIdentifier` |
| **Idioma empleado en los metadatos** | ISO 639-2 (3 letras) | 1 | gmd:language |
| **Tipo de recurso descrito por los metadatos** | Lista controlada | 1 | gmd:hierarchyLevel |
| **Punto de contacto responsable de los metadatos** | Organización, dirección y rol | 1 | gmd:contact |
| **Fecha de creación o actualización de los metadatos** | ISO 8601 | 1 | gmd:dateStamp |
| **Nombre de la norma de metadatos utilizada** | Texto libre | 1 | gmd:metadataStandardName |
| **Versión de la norma de metadatos utilizada** | Texto libre | 1 | gmd:metadataStandardVersion |
| **Título del recurso** | Texto libre | 1 | gmd:title |
| **Descripción resumida del recurso** | Texto libre | 1 | gmd:abstract |
| **Punto(s) de contacto del recurso** | Texto libre / lista controlada | 1..* | gmd:pointOfContact |
| **Fechas relevantes asociadas al recurso** | ISO 8601 / lista controlada | 1..* | gmd:date |
| **Identificador único del recurso** | Texto libre | 1..* | gmd:MD_Identifier |
| **Palabras clave asociadas al recurso** | Texto libre / vocabularios controlados | 1..* | gmd:MD_Keywords |
| **Restricciones de acceso y uso** | Lista controlada | 1..* | gmd:MD_LegalConstraints |
| **Escala o resolución espacial** | Entero o decimal | 1..* | gmd:MD_Resolution |
| **Idioma(s) del recurso** | ISO 639-2 | 1..* | gmd:MD_DataIdentification/gmd:language |
| **Categoría temática del recurso** | Lista controlada | 1..* | gmd:topicCategory |
| **Extensión o localización geográfica** | Bounding Box | 1..* | gmd:EX_Extent |
| **Formato de distribución del recurso** | Texto libre / lista controlada | 1..* | gmd:MD_Format |
| **Recurso en línea para acceso o descarga** | URL | 1..* | gmd:CI_OnlineResource |
| **Alcance del recurso** | Lista controlada | 1 | gmd:scope |
| **Linaje y descripción de la calidad del recurso** | Texto libre | 1 | gmd:LI_Lineage |

- Veáse tabla en el Reglamento de metadatos, [aquí](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:326:0012:0030:ES:PDF#page=8)
---

## Elementos de metadatos de interoperabilidad

| Propiedad | Dominio | Cardinalidad | Descripción |
|---|---|---|---|
| gmd:referenceSystemInfo | EPSG / Texto libre | 1..* | Sistema de referencia |
| gmd:MD_Format | Texto libre | 1..* | Codificación |
| gmd:DQ_TopologicalConsistency | Texto libre | 0..* | Consistencia topológica |
| gmd:characterSet | Lista controlada | 0..* | Estándar de codificación de caracteres |

---

## Metadatos para los servicios espaciales

Además de los elementos de metadatos anteriores se suman estos otros específicos para los sercioes de visualización, descarga, localización y API.

| Descripción | Dominio | Cardinalidad | Propiedad |
|---|---|:---:|---|
| **Tipo de servicio** | Lista controlada | 1 | srv:serviceType |
| **Tipo del recurso acoplado** | Lista controlada | 1 | srv:couplingType |
| **Versión del servicio** | Texto libre | 0..* | srv:serviceTypeVersion |
| **Operaciones del tipo de servicio** | Nombre de operación / protocolo / URL | 0..* | srv:containsOperations |
| **Recurso acoplado** | Identificador del recurso | 0..* | SV_CoupledResource |
| **Opera en** | URL | 0..* | srv:operatesOn |

- Veáse tabla en el Reglamento de metadatos, [aquí](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:326:0012:0030:ES:PDF#page=9)
---

# Descripción detallada de los elementos de metadatos

## Identificador del fichero de metadatos 

**Propiedad** (`gmd:fileIdentifier`)

**Ruta:** `gmd:MD_Metadata/gmd:fileIdentifier`

**Descripción:** Identificador único del fichero de metadatos.

- Es un texto libre.
- La unicidad puede completarse utilizando UUID.
- GeoNetwork asigna por defecto un UUID.
- En metadatos manuales suele seguir el criterio:

`country_producer_product_theme`

**Ejemplo:**

```xml
<gmd:fileIdentifier>
    <gco:CharacterString>spaignLLM</gco:CharacterString>
</gmd:fileIdentifier>
```

---

## Idioma de los metadatos (gmd:language)

**Ruta:** `gmd:MD_Metadata/gmd:language`

**Descripción:** Lengua del fichero de metadatos.

- Lista controlada ISO 639.
- Un fichero de metadatos no puede soportar más de un idioma.

**Ejemplo:**

```xml
<gmd:language>
    <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="spa">Español</gmd:LanguageCode>
</gmd:language>
```

---

## gmd:characterSet

**Ruta:** `gmd:MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:characterSet`

**Descripción:** Codificación de caracteres utilizada en el conjunto de datos.

- Lista controlada.
- Obligatorio si se utiliza una codificación no UTF-8.

**Ejemplo:**

```xml
<gmd:characterSet>
    <gmd:MD_CharacterSetCode
        codeList="https://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_CharacterSetCode"
        codeListValue="utf8"/>
</gmd:characterSet>
```

---

## Tipo de recurso (`gmd:hierarchyLevel´)

**Ruta:** `gmd:MD_Metadata/gmd:hierarchyLevel`

**Descripción:** Tipo de recurso.

**Ejemplo:**

```xml
<gmd:hierarchyLevel>
    <gmd:MD_ScopeCode
        codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_ScopeCode"
        codeListValue="dataset">
        Conjunto de datos
    </gmd:MD_ScopeCode>
</gmd:hierarchyLevel>
```

---

## Punto de contacto de los metadatos (`gmd:contact`)

**Ruta:** `gmd:MD_Metadata/gmd:contact`

**Descripción:** Organización responsable de la creación y mantenimiento de los metadatos.

Información mínima:

- Nombre de organización.
- Correo electrónico.
- Rol.

**Ejemplo:**

```xml
<gmd:contact>
    <gmd:CI_ResponsibleParty>
        <gmd:organisationName>
            <gco:CharacterString>Nombre Organización</gco:CharacterString>
        </gmd:organisationName>
    </gmd:CI_ResponsibleParty>
</gmd:contact>
```

---

## gmd:dateStamp

**Ruta:** `gmd:MD_Metadata/gmd:dateStamp`

**Descripción:** Fecha de creación o actualización del registro.

**Ejemplo:**

```xml
<gmd:dateStamp>
    <gco:Date>2025-11-21</gco:Date>
</gmd:dateStamp>
```

---

## gmd:title

**Ruta:** `MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title`

**Descripción:** Título del recurso.

**Ejemplo:**

```xml
<gmd:title>
    <gco:CharacterString>Divisiones Administrativas de España</gco:CharacterString>
</gmd:title>
```

---

## Resumen (`gmd:abstract`)

**Ruta:** `MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:abstract`

**Descripción:** Resumen del recurso.

**Ejemplo:**

```xml
<gmd:abstract>
    <gco:CharacterString>
        Elementos de hidrografía de Asturias compuesto de aguas físicas.
    </gco:CharacterString>
</gmd:abstract>
```

---

## gmd:MD_Identifier

**Ruta:**

`MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:identifier/gmd:MD_Identifier`

**Descripción:**

Identificador del recurso.

**Ejemplo:**

```xml
<gmd:identifier>
    <gmd:MD_Identifier>
        <gmd:code>
            <gco:CharacterString>BDLJE</gco:CharacterString>
        </gmd:code>
    </gmd:MD_Identifier>
</gmd:identifier>
```

---

## gmd:MD_Keywords

**Ruta:**

`MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:descriptiveKeywords/gmd:MD_Keywords`

**Descripción:**

Palabras clave del recurso.

Listas obligatorias si aplican:

- Tema INSPIRE
- Conjuntos de datos prioritarios
- Ámbito espacial
- Datos de Alto Valor

---

## gmd:MD_LegalConstraints

**Ruta:**

`MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:resourceConstraints/gmd:MD_LegalConstraints`

**Descripción:**

Restricciones en el acceso y uso.

---

## gmd:MD_Resolution

**Ruta:**

`MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:spatialResolution/gmd:MD_Resolution`

**Descripción:**

Resolución espacial.

---

## gmd:EX_Extent

**Ruta:**

`MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:extent/gmd:EX_Extent`

**Descripción:**

Localización geográfica.

---

## gmd:CI_OnlineResource

**Ruta:**

`MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:onLine/gmd:CI_OnlineResource`

**Descripción:**

Recurso en línea.

---

## srv:serviceType

**Ruta:**

`gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:serviceType`

**Descripción:**

Tipo de servicio.

---

## srv:couplingType

**Ruta:**

`gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:couplingType`

**Descripción:**

Tipo del recurso acoplado.

---

## srv:serviceTypeVersion

**Ruta:**

`gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:serviceTypeVersion`

**Descripción:**

Versión del servicio.

---

## srv:containsOperations

**Ruta:**

`gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:containsOperations`

**Descripción:**

Operaciones del servicio.

---

## srv:operatesOn

**Ruta:**

`gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:operatesOn`

**Descripción:**

Indicar la URL del fichero de metadatos de los conjuntos de datos que publica el servicio web.

---

## Licencia

CC-BY 4.0 2025 O.A. Centro Nacional de Información Geográfica

