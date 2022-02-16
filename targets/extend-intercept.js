const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const ProductFullDetailComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
    );

    const CoreButton = ProductFullDetailComponent.addImport(
        "CoreButton from '@oms/core/lib/components/Button'"
    );

    ProductFullDetailComponent.replaceJSX('<Button disabled={isAddToCartDisabled} priority="high" type="submit">', `<${CoreButton} />`);
}
