def main():
    results = []
    values = []
    prev_year = None
    prev_country = None
    with open('data/city_temperature.csv') as file:
        while True:
            line = file.readline()
            if not line:
                break
            _,country,_,_,_,_,year,temperature = line.split(',')
            # print(country)
            if temperature == "AvgTemperature\n":
                continue
            if prev_year is None:
                prev_year = year
                prev_country = country
            if year != prev_year:
                # New country found
                if len(values) > 0:
                    avg = sum(values) / len(values)
                    if avg > 60:
                        print(prev_country)
                    value = (prev_country, prev_year, avg)
                    # print(value)
                    results.append(value)
                prev_country = country
                prev_year = year
                values.clear()
            temperature = float(temperature)
            if temperature != -99:
                values.append((temperature - 32) * 5/9)

    with open('data/city_temperature_formatted.tsv', '+w') as file:
        file.write('Country\tYear\tTemperature\n')
        for country, year, temp in results:
            line = f'{country}\t{year}\t{str(temp)}\n'
            print(line)
            file.write(line)

if __name__ == "__main__":
    main()