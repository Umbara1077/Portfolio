const COPYRIGHT = '\u00A9 2026 Dante Corso \u2014 Precision Pixel Innovations. All rights reserved.';
const DISCLAIMER =
    'Disclaimer: All logos and trademarks are the property of their respective owners. Their use on this site does not imply endorsement or affiliation.';

export const simpleFooter = <p>{COPYRIGHT}</p>;

export const footerWithDisclaimer = (
    <>
        <p>{COPYRIGHT}</p>
        <p>{DISCLAIMER}</p>
    </>
);

export const legacyFooter = <p>&copy; 2024 Precision Pixel Innovations. All rights reserved.</p>;
