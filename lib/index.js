module.exports = ({ wallets, refs, config, client }) => ({
  getCount: () => client.query("counter", { get_count: {} }),
  increment: (signer = wallets.validator) =>
    client.execute(signer, "counter", { increment: {} }),

  mint_nft: (id_num, signer = wallets.nft_minter) =>
    client.execute(signer, "terra-peep721", {
      mint: {
        token_id: "test_token_" + id_num,
        owner: "terra1u7m2ncv6kuj82lj255fj8hnra9f90nxtlxavll",
        token_uri: "https://test-token-uri-" + id_num,
        extension: {
          token_uri: "https://test-token-uri-" + id_num,
          image: "https://test-image-uri-" + id_num,
          image_data: null,
          external_url: null,
          description: null,
          name: null,
          attributes: null,
          background_color: null,
          animation_url: null,
          youtube_url: null,
          current_status: null,
        }
      }
    })
});
