import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
  it('should not render image gallery when no images', () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should render list of images with src attribute', () => {
    const imageUrls: string[] = [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ];

    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(2);

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute('src', url);
    });
  });
});
