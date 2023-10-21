import Home from '../src/components/pages/Home/home';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutUs from '../src/components/pages/about/about-us';
import ArtistPage from '../src/components/pages/artist-page/artist-page';
import Category from '../src/components/pages/category/category';
import Dashboard from '../src/components/pages/dashboard/dashboard';



describe('testing pages',()=>{

     test('render home', async () => { 
        render(<Home />);
        const title = screen.getByText(/The digital art gallery you’ve always wanted/i)

        const textTitle = screen.queryAllByText(/Find the art you love/i)

        const titleCard = screen.getByText(/This week’s collection/i)

        const carouselTitle = screen.getByText(/FEATURED ARTIST/i)


        expect(title).toBeInTheDocument()
        expect(textTitle.length).toBeGreaterThan(0)
        expect(titleCard).toBeInTheDocument()
        expect(carouselTitle).toBeInTheDocument()
     })




     test('render about us', () => { 
        render(<AboutUs />);

        const title = screen.getByText(/Welcome to a new place to feel inspired/i)

        const titleMision = screen.getByText(/OUR MISSION/i)

        const titleMisionText = screen.getByText(/DoArt is a dynamic and vibrant e-commerce platform dedicated to celebrating the world of art and artists. This online business is a haven for art enthusiasts, collectors, and artists themselves, providing a curated selection of exquisite artwork from a diverse array of talented artists./i)

        const ourMisionTitle = screen.getByText(/OUR VISION/i)



        expect(title).toBeInTheDocument();
        expect(titleMision).toBeInTheDocument();
        expect(titleMisionText).toBeInTheDocument();
        expect(ourMisionTitle).toBeInTheDocument();
     })


     test('render artist page', () => { 
        render(<ArtistPage />)

        const titlePage = screen.getByText(/ARTWORK/i)

        expect(titlePage).toBeInTheDocument();
      })


      test('render artwork', () => { 
        render(<Category />)

        const titlePages = screen.getAllByText(/MIXED-MEDIA/i);
        expect(titlePages.length).toBeGreaterThan(0);


        const inputSearch = screen.getByPlaceholderText('Search for product...')
        expect(inputSearch).toBeInTheDocument();
        expect(inputSearch).toHaveAttribute('id', 'search__input');


        const searchButton = screen.getByRole('button', { name: '' });
        expect(searchButton).toBeInTheDocument()
        expect(searchButton).toHaveAttribute('id', 'search__button');
       })

       test('render dashboard', () => { 
        render(<Dashboard />)

        const searchInputs = screen.getAllByPlaceholderText("Search for product...")
        expect(searchInputs.length).toBeGreaterThan(0);
        searchInputs.forEach((searchInput) => {
            expect(searchInput).toBeInTheDocument();
          });

        
        const searchButtons = screen.getAllByRole('button', {name:''});
        expect(searchButtons.length).toBeGreaterThan(0);
        searchButtons.forEach((searchButton)=>{
        expect(searchButton).toBeInTheDocument()
        })

        const titleProduct = screen.getByText(/GALLERY BACKLOG/i);
        expect(titleProduct).toBeInTheDocument();

        const buttonBefore = screen.getByRole('button', { name: '⟨' });
        expect(buttonBefore).toBeInTheDocument();





        })


})