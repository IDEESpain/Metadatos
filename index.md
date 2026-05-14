# Metadatos de conjuntos de datos espaciales de alto valor y servicios espaciales

## Resumen

Descripción detallada de los elementos mínimos de metadatos para describir conjuntos de datos geoespaciales, servicios y series, facilitando su interoperabilidad.

---

## Introducción

Describe los elementos de metadatos geoespaciales que lleva asociado un producto.

---

## Contexto normativo

- Directiva Inspire 2007/2/CE1 establece las reglas generales para la formación de una Infraestructura de Datos Espaciales en la Comunidad Europea.
- Ley 14/2010, de 5 de julio, sobre las infraestructuras y los servicios de información geográfica en España (LISIGE).
- Reglamento (CE) Nº 1205/2008 en lo que se refiere a los metadatos.
- Corrección de errores del Reglamento (CE) Nº 1205/2008.
- Directrices Técnicas sobre metadatos.
- Reglamento (UE) Nº 1089/201013 en lo que se refiere a la interoperabilidad de los conjuntos y los servicios de datos espaciales.

---

## Historial de Revisiones

- 0.0.1 - Sep 2025 - Primera versión, borrador . mockup-metadatos1
- 0.0.2 - Nov 2025 - Segunda versión, borrador . mockup-metadatos2
- 0.0.3 - Dic 2025 - Tercera versión, borrador . mockup-metadatos3

---

# Entidades Principales

## Elementos de metadatos sobre los datos

| Propiedad | Dominio | Cardinalidad | Descripción |
|---|---|---|---|
| gmd:fileIdentifier | Texto libre | 1 | Identificador único del fichero de metadatos |
| gmd:language | Tres letras. Lista controlada de la ISO 639-2 | 1 | Idioma de los metadatos |
| gmd:hierarchyLevel | Lista controlada | 1 | Nivel jerárquico del recurso |
| gmd:contact | Organización, dirección y rol | 1 | Punto de contacto de los metadatos |
| gmd:dateStamp | ISO 8601 | 1 | Fecha de los metadatos |
| gmd:metadataStandardName | Texto libre | 1 | Nombre de la norma de metadatos |
| gmd:metadataStandardVersion | Texto libre | 1 | Versión de la norma de metadatos |
| gmd:title | Texto libre | 1 | Título del conjunto de datos |
| gmd:abstract | Texto libre | 1 | Resumen del conjunto de datos |
| gmd:pointOfContact | Texto libre / lista controlada | 1.* | Punto de contacto del recurso |
| gmd:date | ISO 8601 / Lista controlada | 1.* | Referencias temporales |
| gmd:MD_Identifier | Texto libre | 1.* | Identificador único del recurso |
| gmd:MD_Keywords | Texto libre / vocabularios controlados | 1.* | Palabras clave |
| gmd:MD_LegalConstraints | Lista controlada | 1.* | Restricciones en el acceso y uso |
| gmd:MD_Resolution | Entero o decimal | 1.* | Escala o Resolución espacial |
| gmd:MD_DataIdentification/gmd:language | ISO 639-2 | 1.* | Idioma del recurso |
| gmd:topicCategory | Lista controlada | 1.* | Categoría del tema del recurso |
| gmd:EX_Extent | Bounding Box | 1.* | Localización geográfica |
| gmd:MD_Format | Texto libre / lista controlada | 1.* | Formato de distribución |
| gmd:CI_OnlineResource | URL | 1.* | URL de distribución |
| gmd:scope | Lista controlada | 1 | Alcance del recurso |
| gmd:LI_Lineage | Texto libre | 1 | Tipo/alcance del recurso |

---

## Elementos de metadatos de interoperabilidad

| Propiedad | Dominio | Cardinalidad | Descripción |
|---|---|---|---|
| gmd:referenceSystemInfo | EPSG / Texto libre | 1..* | Sistema de referencia |
| gmd:MD_Format | Texto libre | 1..* | Codificación |
| gmd:DQ_TopologicalConsistency | Texto libre | 0..* | Consistencia topológica |
| gmd:characterSet | Lista controlada | 0..* | Estándar de codificación de caracteres |

---

## Elementos de metadatos específicos para los servicios

| Propiedad | Dominio | Cardinalidad | Descripción |
|---|---|---|---|
| srv:serviceType | Lista controlada | 1 | Tipo de Servicio |
| srv:couplingType | Lista controlada | 1 | Tipo del recurso acoplado |
| srv:serviceTypeVersion | Texto libre | 0...* | Versión del servicio |
| srv:containsOperations | Nombre operación / protocolo / URL | 0...* | Operaciones del tipo de servicio |
| SV_CoupledResource | Identificador del recurso | 0...* | Recurso acoplado |
| srv:operatesOn | URL | 0...* | Opera en |

---

# Detalle de propiedades

## gmd:fileIdentifier

**Ruta:**

`gmd:MD_Metadata/gmd:fileIdentifier`

**Descripción:**

Identificador único del fichero de metadatos.

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

## gmd:language

**Ruta:**

`gmd:MD_Metadata/gmd:language`

**Descripción:**

Lengua del fichero de metadatos.

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

**Ruta:**

`gmd:MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:characterSet`

**Descripción:**

Codificación de caracteres utilizada en el conjunto de datos.

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

## gmd:hierarchyLevel

**Ruta:**

`gmd:MD_Metadata/gmd:hierarchyLevel`

**Descripción:**

Tipo de recurso.

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

## gmd:contact

**Ruta:**

`gmd:MD_Metadata/gmd:contact`

**Descripción:**

Organización responsable de la creación y mantenimiento de los metadatos.

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

**Ruta:**

`gmd:MD_Metadata/gmd:dateStamp`

**Descripción:**

Fecha de creación o actualización del registro.

**Ejemplo:**

```xml
<gmd:dateStamp>
    <gco:Date>2025-11-21</gco:Date>
</gmd:dateStamp>
```

---

## gmd:title

**Ruta:**

`MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:citation/gmd:CI_Citation/gmd:title`

**Descripción:**

Título del recurso.

**Ejemplo:**

```xml
<gmd:title>
    <gco:CharacterString>Divisiones Administrativas de España</gco:CharacterString>
</gmd:title>
```

---

## gmd:abstract

**Ruta:**

`MD_metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:abstract`

**Descripción:**

Resumen del recurso.

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

