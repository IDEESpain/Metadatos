document
.getElementById("metadataForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const title =
        document.getElementById("title").value;

    const abstract =
        document.getElementById("abstract").value;

    const date =
        document.getElementById("date").value;

    const xml = `
<?xml version="1.0" encoding="UTF-8"?>

<gmd:MD_Metadata
xmlns:gmd="http://www.isotc211.org/2005/gmd"
xmlns:gco="http://www.isotc211.org/2005/gco">

<gmd:identificationInfo>

<gmd:MD_DataIdentification>

<gmd:citation>
<gmd:CI_Citation>

<gmd:title>
<gco:CharacterString>${title}</gco:CharacterString>
</gmd:title>

<gmd:date>
<gmd:CI_Date>

<gmd:date>
<gco:Date>${date}</gco:Date>
</gmd:date>

</gmd:CI_Date>
</gmd:date>

</gmd:CI_Citation>
</gmd:citation>

<gmd:abstract>
<gco:CharacterString>
${abstract}
</gco:CharacterString>
</gmd:abstract>

</gmd:MD_DataIdentification>

</gmd:identificationInfo>

</gmd:MD_Metadata>
`;

    descargarXML(xml);

});

function descargarXML(xml){

    const blob = new Blob(
        [xml],
        { type: "application/xml" }
    );

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = "metadata_inspire.xml";

    a.click();
}